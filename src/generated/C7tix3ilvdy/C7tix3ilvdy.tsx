
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-7tix3ilvdy',
  shadow: true,
})
export class C7tix3ilvdy {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  