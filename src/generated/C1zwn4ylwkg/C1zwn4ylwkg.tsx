
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-1zwn4ylwkg',
  shadow: true,
})
export class C1zwn4ylwkg {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  