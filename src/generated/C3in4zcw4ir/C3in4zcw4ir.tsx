
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-3in4zcw4ir',
  shadow: true,
})
export class C3in4zcw4ir {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  