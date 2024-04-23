
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-5cgko9z7rs',
  shadow: true,
})
export class C5cgko9z7rs {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  